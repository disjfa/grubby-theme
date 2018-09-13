const gulp = require("gulp");
const favicons = require("favicons").stream;
const log = require("fancy-log");

gulp.task("favicon", function () {
  return gulp.src("logo.png").pipe(favicons({
    appName: "Grubby theme",
    appDescription: "A simple theme, responsive and beautiful.",
    developerName: "disjfa",
    developerURL: "http://disjfa.nl/",
    background: "#2980b9",
    theme_color: "#fff",
    path: "/grubby-theme/icons/",
    url: "https://disjfa.github.io/grubby-theme/",
    display: "standalone",
    orientation: "any",
    start_url: "/grubby-theme/?homescreen=1",
    version: 1.0,
    logging: false,
    html: "index.html",
    pipeHTML: true,
    replace: true
  }))
    .on("error", log)
    .pipe(gulp.dest("./site/icons"));
});
