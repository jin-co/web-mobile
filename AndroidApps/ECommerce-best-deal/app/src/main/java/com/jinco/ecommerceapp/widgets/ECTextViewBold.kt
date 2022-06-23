package com.jinco.ecommerceapp.widgets

import android.content.Context
import android.graphics.Typeface
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatTextView

class ECTextViewBold(context: Context, attributeSet: AttributeSet) :
    AppCompatTextView(context, attributeSet) {
        init {
            addText()
        }

    private fun addText() {
        val boldTypeface: Typeface = Typeface.createFromAsset(context.assets, "Montserrat-Bold.ttf")
//        typeface = boldTypeface
        setTypeface(boldTypeface)
    }
}