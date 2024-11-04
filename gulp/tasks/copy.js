export const copy = () => {
	return app.gulp.src(app.path.src.files)
		.pipe(app.gulp.dest(app.path.build.files))	
};

export const copyWebmanifest = () => {
	return app.gulp.src(app.path.src.webmanifest)
		.pipe(app.gulp.dest(app.path.build.webmanifest))	
}

export const copyXml = () => {
	return app.gulp.src(app.path.src.xml)
		.pipe(app.gulp.dest(app.path.build.xml))	
}