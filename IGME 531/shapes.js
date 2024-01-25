function drawCircle(ctx, x, y, tx, ty, radius, fillStyle) { 
    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(rotation)
    ctx.scale(scale, scale);
    ctx.fillStyle = fillStyle;  
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2); 
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

function drawEllipse(ctx, x, y, tx, ty, radiusX, radiusY, fillStyle) {
    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(rotation)
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}

function drawRectangle(ctx, x, y, tx, ty, width, height, fillStyle) {
    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(rotation)
    ctx.scale(scale, scale);
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
}

function drawPolygon(ctx, points, fillStyle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation)
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.restore();
}

function drawLine(ctx, x, y, startX, startY, endX, endY, strokeStyle, lineWidth) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation)
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}
