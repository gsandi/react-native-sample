# Building React Native Sample

1. Clone repo
2. Navigate to root folder in fav command line tool
3. Install project dependencies with `yarn/npm install`
4. After install completion, type `yarn/npm run server` to start node server
5. Start Android device emulator (I used `Android Studio > Tools > Android > AVD Manager`)
6. After an emulator has started, type `react-native run-android` into command line tool to build and install project on emulated device
7. Project should show up on device upon successful build

# Warning

The build may fail if the repo is cloned into a lot of nested folders like `C:\Users\chris\Documents\temp\start\of\nested\folders\blahhhh\react-native-sample-master`

This is due to the OS having a file name size limit

To get around this, clone repo in a shorter file path. I just developed with the project at `C:\`