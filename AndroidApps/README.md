# Android

# current distribution
http://developer.android.com/about/dashboards/index.html

# Issue solving
- Unable to start activity ComponentInfo
-> turn on Device manager -> click down arrow at the end -> click 'Cold Boot'

- android studio API 32 platform not found
-> https://stackoverflow.com/questions/70691318/android-api-32-sources-not-found

# Changing version numbers
- Related issue: androis studio E/Surface: getSlotFromBufferLocked: unknown buffer: 0xa2a898c0
https://www.freakyjolly.com/change-version-number-of-app-in-android-studio/#:~:text=Step%201%29%20Just%20go%20to%20Project%20and%20Right,shown%20in%20the%20image%20below.%20Now%20click%20%E2%80%9COK%E2%80%9D.

# Error inflating class com.google.android.material.textfield.TextInputLayout
https://stackoverflow.com/questions/57134070/error-inflating-class-com-google-android-material-textfield-textinputlayout


# Gradle
-> After around March 2022. syntax for the build gradle changed dramatically

- Adding Kotlin view binding extension
-> open app gradle (not project one)
-> add `id 'kotlin-android-extensions'` : this is deprecated https://developer.android.com/topic/libraries/view-binding/migration
