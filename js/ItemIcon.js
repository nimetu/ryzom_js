/**
 * RyzomJS
 *
 * Copyright (c) 2013 Meelis Mägi <nimetu@gmail.com>
 *
 * @license LGPLv3+
 */
"use strict";

var ItemIcon = {
    imagesPath: 'images/',
    armorColors: [
        // r + g<<8 + b<<16 + a<<24
        233 + (22 << 8) + (0 << 16) + (255 << 24),
        220 + (140 << 8) + (50 << 16) + (255 << 24),
        170 + (250 << 8) + (0 << 16) + (255 << 24),
        0 + (215 << 8) + (120 << 16) + (255 << 24),
        50 + (100 << 8) + (255 << 16) + (255 << 24),
        170 + (55 << 8) + (110 << 16) + (255 << 24),
        250 + (250 << 8) + (250 << 16) + (255 << 24),
        80 + (80 << 8) + (120 << 16) + (255 << 24)
    ],
    createIcon: function (opts) {
        opts = $.extend({
                sheetid: '',
                c: 0,
                q: 1,
                s: 1,
                sap: -1,
                destroyed: false
            }, opts
        );

        var canvas = document.createElement('canvas');
        canvas.width = 40;
        canvas.height = 40;

        var ctx = canvas.getContext('2d');

        var images = [];
        var sheetname = opts.sheetid.replace('.sitem', '');
        var sheet = ItemSheets[sheetname];
        // first try sheets own color, then user color
        var armorColor = 0;
        if (sheet.color !== undefined && this.armorColors[sheet.color] !== undefined) {
            armorColor = this.armorColors[sheet.color];
        } else if (this.armorColors[opts.c] !== undefined) {
            armorColor = this.armorColors[opts.c];
        }

        this.addBackground(images, sheet, armorColor);
        if (opts.sap >= 0) {
            this.addSap(images, opts.sap);
        } else {
            this.addLabel(images, sheet);
        }
        this.addQuality(images, opts.q);
        this.addStack(images, opts.s);
        if (opts.destroyed) {
            images.push(['ico_task_failed.png', 0, 0]);
        }

        for (var i = 0; i < images.length; ++i) {
            ctx.drawImage(images[i][0], images[i][1], images[i][2]);
        }

        return canvas;
    },
    addBackground: function (images, sheet, armorColor) {
        var self = this;

        ['back', 'main', 'over', 'over2'].forEach(function (key) {
            // we have a icon
            if (sheet.icon[key]) {
                var img = TextureManager.get(sheet.icon[key]);
                var checkMask = true;
                // we have a texture
                if (img) {
                    // we have a texture color
                    if (sheet.icon_color && sheet.icon_color[key]) {
                        img = self.colorize_(img, sheet.icon_color[key]);
                        checkMask = false;
                    }
                    images.push([img, 0, 0]);
                }

                if (checkMask) {
                    // for armor, we need to check if 'main' icon exist with '_mask' suffix
                    // eg, 'ar_armpad.png' -> 'ar_armpad_mask.png'
                    var mask = sheet.icon[key].replace('.png', '_mask.png');
                    if (TextureManager.get(mask)) {
                        img = self.colorize_(TextureManager.get(mask), armorColor);
                        images.push([img, 0, 0]);
                    }
                }
            }
        });
    },
    addLabel: function (images, sheet) {
        if (sheet.txt) {
            // top right corner
            this.addText(images, sheet.txt, 1, 1);
        }
    },
    addQuality: function (images, quality) {
        // 5x8, images/typo/numbers_X.png
        if (quality <= 0) {
            return;
        }
        // bottom right corner
        this.addNumbers(images, quality, 40, 32, true);
    },
    addStack: function (images, stack) {
        // 5x6, images/typo/typo_X.png
        if (stack <= 0) {
            return;
        }
        // bottom left corner
        this.addText(images, 'x', 1, 33);
        this.addNumbers(images, stack, 6, 32);
    },
    addSap: function (images, sap) {
        if (sap < 0) {
            return;
        }
        var img = TextureManager.get('sapload.png');
        if (img) {
            images.push([img, 0, 0]);
        }
        if (sap >= 1) {
            // top right corner
            this.addNumbers(images, sap - 1, 1, 2);
        }
    },
    addText: function (images, s, x, y) {
        var n, w = 5, re = new RegExp('[a-zA-Z0-9?]');
        for (var i = 0, l = s.length; i < l; i++) {
            n = s.substr(i, 1);
            if (!re.test(n)) {
                continue;
            }
            if (n == '?') {
                n = 'question';
            }
            var img = TextureManager.get('typo/typo_' + n + '.png');
            if (img) {
                images.push([img, x, y]);
                x += w;
            }
        }
    },
    addNumbers: function (images, nr, x, y, rev) {
        var n, s = parseInt(nr).toString(), w = 5;
        rev = rev || false;
        if (rev) {
            x -= s.length * w;
        }
        for (var i = 0, l = s.length; i < l; i++) {
            n = s.substr(i, 1);
            var img = TextureManager.get('typo/numbers_' + n + '.png');
            if (img) {
                images.push([img, x, y]);
                x += w;
            }
        }
    },
    colorize_: function (img, color) {
        var tint = {
            a: (color >> 24) & 255,
            b: (color >> 16) & 255,
            g: (color >> 8) & 255,
            r: (color & 255)
        };

        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (var i = 0, len = pixels.data.length; i < len; i += 4) {
            pixels.data[i] = pixels.data[i] * tint.r / 255;
            pixels.data[i + 1] = pixels.data[i + 1] * tint.g / 255;
            pixels.data[i + 2] = pixels.data[i + 2] * tint.b / 255;
            pixels.data[i + 3] = pixels.data[i + 3] * tint.a / 255;
        }
        ctx.putImageData(pixels, 0, 0);

        return canvas;
    }
};
