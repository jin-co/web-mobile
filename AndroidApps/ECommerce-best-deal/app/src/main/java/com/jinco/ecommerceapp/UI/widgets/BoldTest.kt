package com.jinco.ecommerceapp.UI.widgets

import android.content.Context
import android.graphics.Typeface
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatTextView

class BoldTest(context: Context, attributeSet: AttributeSet) :
    AppCompatTextView(context, attributeSet) {
        init {
            addText()
        }

    private fun addText() {
        val boldTypeface: Typeface = Typeface.createFromAsset(context.assets, "filenamd")
        typeface = boldTypeface
    }
}