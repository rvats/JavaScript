

  function Color(r, g, b, a) {
      this.r = r;
      this.b = b;
      this.g = g;
      this.a = typeof a == "number" ? a : 1;
  }

  Color.prototype.rgba2rgb = function (color)
  {
      var alpha = color.a;

      return new Color(
          (1 - alpha) * this.r + alpha * color.r,
          (1 - alpha) * this.g + alpha * color.g,
          (1 - alpha) * this.b + alpha * color.b
      );
  };
