package com.jinco.ecommerceapp.UI.widgets

import android.content.Context
import android.graphics.Typeface
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatTextView

class BoldTextTest(context: Context, attributeSet: AttributeSet) :
    AppCompatTextView(context, attributeSet) {
        init {
            addText()
        }

    private fun addText() {
        val boldTypeface: Typeface = Typeface.createFromAsset(context.assets, "Mo")
        typeface = boldTypeface
    }
//    val boldTypeface: Typeface =
//        Typeface.createFromAsset(context.assets, "Montserrat-Bold.ttf")
//    typeface = boldTypeface
}