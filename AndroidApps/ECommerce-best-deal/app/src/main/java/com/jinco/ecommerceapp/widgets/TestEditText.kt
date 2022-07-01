package com.jinco.ecommerceapp.widgets

import android.content.Context
import android.graphics.Typeface
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatEditText

class TestEditText(context: Context, attributeSet: AttributeSet) :
    AppCompatEditText(context, attributeSet) {
        init {
            applyFont()
        }

    private fun applyFont() {
        val typeface = Typeface.createFromAsset(context.assets, "mont")
        setTypeface(typeface)
    }
}