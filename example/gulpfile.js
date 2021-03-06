var gulp = require('gulp');
gulpHtmlVersion = require('../index');

gulp.task('default', function () {
  return gulp.src('./*.html')
    .pipe(gulpHtmlVersion({
      paramName: 'version',
      suffix: ['css', 'js', 'png'],
    }))
    .pipe(gulp.dest('./build/'));
});
