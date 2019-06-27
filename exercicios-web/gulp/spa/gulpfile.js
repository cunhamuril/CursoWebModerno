const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    gulp.task('default', () => {
        if(util.env.production){ // Só vai executar estas tasks se a flag production estiver ativada
            sequence('deps', 'app')
            // gulp.start('deps', 'app')
        } else {
            sequence('deps', 'app', 'servidor')
            // gulp.start('deps', 'app', 'servidor')
        }
    })
})