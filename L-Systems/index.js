let alphabet = ['F', 'G', '+', '-'];
const axiom = 'F';
const rules = {
  'F': 'F+G+G+FF+GG',
  'G': 'F-G',
  '+': '+',
  '-': '-'
};

const iterate_once = (lindenmayerString) => {
  let newString = '';
  for (let i = 0; i < lindenmayerString.length; i++) {
    const result = rules[lindenmayerString[i]];
    newString += result || lindenmayerString[i];
  }
  return newString;
}

const iterateNTimes = (n, lindenmayerString) => {
  let newString = lindenmayerString;
  for (let i = 0; i < n; i++) {
    newString = iterate_once(newString);
  }
  return newString;
};

const makeVisual = (options, lindenmayerString) => {
  let theSvgString = '';
  
  const colorMap = {
    'F': 'red',
    'G': 'blue',
    '+': 'green',
    '-': 'purple'
  };


  // Basically constants
  let angle = (options.angle || 90) * Math.PI / 180 + Math.random();
  let startingPoint = options.startingPoint || [0, 0];
  let lineLength1 = options.lineLength1 || 10;
  let lineLength2 = options.lineLength2 || 10;
  let currentLineLength;

  // State
  let rotation = 0;
  let points = [startingPoint];

  const moveForward = () => {
    const lastPoint = points[points.length - 1];

    const dx = Math.cos(rotation) * lineLength1;
    const dy = Math.sin(rotation) * lineLength1;

    points.push([lastPoint[0] + dx, lastPoint[1] + dy]);
  };

  const whatToDo = {
    'F': () => {
      return moveForward();
    },
    'G': () => {
      return moveForward();
    },
    '+': () => {
      rotation = rotation + angle;
    },
    '-': () => {
      rotation = rotation + angle;
    }
  };

  for (let i = 0; i < lindenmayerString.length; i++) {
    const symbol = lindenmayerString[i];
    const toDo = whatToDo[symbol];
    toDo();

    const color = colorMap[symbol] || 'black';

    if (i < lindenmayerString.length - 1) {
      const startPoint = points[points.length - 2];
      const endPoint = points[points.length - 1];
      theSvgString += `<line x1="${startPoint[0]}" y1="${startPoint[1]}" x2="${endPoint[0]}" y2="${endPoint[1]}" stroke="${color}" stroke-width="1px"/>`;
    }
  }

  return theSvgString;
};

const expanded = iterateNTimes(6, axiom);

const result = makeVisual({
  lineLength1: 105,
  lineLength2: 105,
  angle: 1225,
  startingPoint: [0, 0]
}, expanded);

const svg = document.querySelector('svg');
svg.innerHTML = result;

// let oneStep = iterate_once(axiom);
// debugger;