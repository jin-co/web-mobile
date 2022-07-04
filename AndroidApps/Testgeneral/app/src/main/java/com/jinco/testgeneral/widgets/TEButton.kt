package com.jinco.testgeneral.widgets

import android.content.Context
import android.graphics.Typeface
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatButton

class TEButton(context: Context, attributeSet: AttributeSet) :
    AppCompatButton(context, attributeSet) {
    init {
        applyFont()
    }

    private fun applyFont() {
        val typeface = Typeface.createFromAsset(context.assets, "font")
        setTypeface(typeface)
    }
}