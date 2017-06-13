import { Gulp, Task, SetGulpOptions } from "ts-gulp-tasks"
import * as tslint from "gulp-tslint"
import * as gulp from "gulp"

@Gulp(gulp)
class GulpFile {
	@Task()
	static "tslint"() {
		gulp.src([
			"src/**/*.ts",
			"src/**/*.tsx"
		])
		.pipe(tslint())
		.pipe(tslint.report())
	}
}

console.log(GulpFile)