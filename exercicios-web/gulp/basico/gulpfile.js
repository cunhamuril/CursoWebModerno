const gulp = require('gulp')

gulp.task('default', () => { // default é a task (tarefa) porta de entrada do gulp 
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
     return gulp.src('pastaA/**/*.txt') 
        // src define quais são arquivos que irão ser trabalhados, podendo ser um tipo de arquivo ou um array de arquivos
        // * define que serão todos os arquivos com extenção .txt
        // ** define que serão copiadas, além de todos arquivos, como também as subpastas da pasta em questão

        // .pipe(transformacao1()) // Pipe and filter -> pipe é uma função que vai encadeando uma chamada a outra
        // .pipe(transformacao2()) // Com objetivo de filtrar plugins e funções gulp 
        .pipe(gulp.dest('pastaB')) // dest -> destino
})

gulp.task('antes1', () => {
    console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim 1!!!')
})

gulp.task('fim2', () => {
    console.log('Fim 2!!!')
})