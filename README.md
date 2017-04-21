# AngularJsSeed
很久以前搭建的一个angularjs后台项目管理系统，下载下来可以作为项目搭建的seed。	

本项目是用angularjs+require.js+gulp.js+sass搭建，UI主要是通过bootstrap+css3实现，布局采用css3的flex布局，适用于不同分配率下的设备。

直接把项目下载至本地npm install对应的package里面的依赖包，将项目放于tomcat/webapp下面即可启动(可能出现ssl验证跟跨域问题,可以用chrome的跨域模式打开,并对chrome采用proced advance通过SSL)。

本项目为以后搭建项目方便自己开发的一个种子项目，条件有限所以采用的是简单的session验证，如需token验证可以自己选择在原有项目上加上对应的代码。

(第一版本未加入拦截器代码。	第一版本已实现页面登录验证功能)

（测试登录账户为账号18717777123密码123）

Login页面：
![image](https://github.com/lingpengzhou/AngularJsSeed/raw/master/screenshots/SeedLogin.png)


跳转后的页面：
![image](https://github.com/lingpengzhou/AngularJsSeed/raw/master/screenshots/SeedAdmin.png)
