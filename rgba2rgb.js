function Color(r, g, b, a) {
	this.r = r;
  this.b = b;
  this.g = g;
  this.a = typeof a == "number" ? a : 1;
}

function rgba2rgb(RGB_background, RGBA_color) {
  var alpha = RGBA_color.a;
  return new Color(
    (1 - alpha) * RGB_background.r + alpha * RGBA_color.r,
    (1 - alpha) * RGB_background.g + alpha * RGBA_color.g,
    (1 - alpha) * RGB_background.b + alpha * RGBA_color.b
  );
}
