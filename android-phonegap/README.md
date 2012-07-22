
One time install of cordova JAR
-------------------------------
mvn --file install-cordova-pom.xml install

Normal routine
--------------
mvn clean install android:apk
mvn android:emulator-start
mvn android:deploy

