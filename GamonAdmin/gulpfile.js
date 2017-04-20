var gulp = require("gulp");  
var amdOptimize = require("amd-optimize");  
var concat = require('gulp-concat');
var uglifyJS = require('gulp-uglify');
var  del = require('del');
var ngAnnotate = require('gulp-ng-annotate');  
 
gulp.task('clean', function(cb) {
    del(['target','dist/*.js','dist/*.css'], cb)
});

gulp.task("default",function () {  
   
  return gulp.src("scripts/**/*.js")   //路径 
    // Traces all modules and outputs them in the correct order.   
     .pipe(amdOptimize("main", {  
			  paths: {
			    angular: 'vendor/js/angular.min',
			    jquery: 'vendor/js/jquery-2.1.1.min',
			    domReady: 'vendor/js/domReady',
			    angularroute:'vendor/js/angular-route.min',
			    angularresource:'vendor/js/angular-resource',
			    angularuiroute:'vendor/js/angular-ui-router',
			   	bootstrap:'vendor/js/bootstrap.min',
		   		ApiDefines:'config/ApiDefines'
			  },
             shim: {
			    angular: {
			      deps: [ 'jquery'],
			      exports: 'angular'
			    },
			    angularroute:{
					deps: ["angular"]
				},
				angularresource:{
					deps:["angular"]
				},
				angularuiroute:{
					deps:["angular"]
				},
				'bootstrap':{
					deps:["jquery"]
				},
				findNestedDependencies: true,
      			include: false,
      			wrapShim:true
  		}  
    }))     //主入口文件  
    .pipe(concat("main.js"))
    .pipe(ngAnnotate())      //合并后的文件，如何合并后的文件和主入口名一样，构建后便只有一个文件  
    .pipe(uglifyJS()) 
    .pipe(gulp.dest("dist"));  //输出目录     
}); 