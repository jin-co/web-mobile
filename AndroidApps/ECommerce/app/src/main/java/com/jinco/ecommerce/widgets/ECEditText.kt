package com.jinco.ecommerce.widgets

import android.content.Context
import android.graphics.Typeface
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatEditText

class ECEditText(context: Context, attributeSet: AttributeSet)
    : AppCompatEditText(context, attributeSet) {

    init {
        makeBold()
    }

    private fun makeBold() {
        val boldTypeface: Typeface =
            Typeface.createFromAsset(context.assets, "Montserrat-Bold.ttf")
        setTypeface(boldTypeface)
    }
}