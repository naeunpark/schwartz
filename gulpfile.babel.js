import del from "del";
import gulp from "gulp";
import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";
import bro from "gulp-bro";
import image from "gulp-image";
import babelify from "babelify";

sass.compiler = require("node-sass");

const routes = {
    css : {
        watch : ["src/scss/*/**", "src/scss/*.scss"],
        src : "src/scss/styles.scss",
        dist : "dist/css"
    },
    js : {
        watch : "src/js/*",
        src : "src/js/main.js",
        dist : "dist/js"
    },
    img : {
        src : "src/img/*",
        dist : "dist/img"
    }
};

const styles = () =>
    gulp
        .src(routes.css.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            flexbox: true,
            grid: "autoplace"
        }))
        .pipe(minify())
        .pipe(gulp.dest(routes.css.dist));

const js = () =>
        gulp
            .src(routes.js.src)
            .pipe(
                bro({
                    transform: [
                        babelify.configure({ presets: ["@babel/preset-env"]}),
                        ["uglifyify", {global: true}]
                    ]
                })
            )
            .pipe(gulp.dest(routes.js.dist));

const img = () =>
        gulp
            .src(routes.img.src)
            .pipe(image())
            .pipe(gulp.dest(routes.img.dist));

const watch = () =>
        gulp.watch(routes.css.watch, styles);
        gulp.watch(routes.js.watch, js);
        

const clean = () =>
        del(['dist/**', '!public']);

const prepare = gulp.series([clean, img]);

const assets = gulp.series([styles, js]);

const live = gulp.series([watch]);

export const dev = gulp.series([prepare, assets, live]);