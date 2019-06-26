const gulp = require('gulp')
const concat = require ('gulp-concat') // Serve para concatenar vários arquivos em um só
// const uglify = require ('gulp-uglify') // Tirar os espaços em branco para deixar o código mais compacto
const babel = require ('gulp-babel') /* <babeljs.io> Serve para converter um código com tecnologias mais 
                                        novas para uma mais antiga que seja suportada por todos os browsers */

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            minified: true, // minificar (cumpre o mesmo papel do uglify)
            comments: false, // Tirar comentários
            presets: ["env"] /* É um preset que automaticamente determina os plugins que precisa baseado no
                                ambiente suportado */
        }))
        //.pipe(uglify()) // uglify não suporta as novas versões do ES, então não irá funcionar sem o babel
        .on('error', function (err) { console.log(err) })
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})