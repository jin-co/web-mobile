package com.jinco.ecommerce.widgets

import android.content.Context
import android.graphics.Typeface
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatButton

class ECButton (context: Context, attributeSet: AttributeSet)
    : AppCompatButton(context, attributeSet) {

    init {
        makeBold()
    }

    private fun makeBold() {
        val boldTypeface: Typeface =
            Typeface.createFromAsset(context.assets, "Montserrat-Bold.ttf")
        setTypeface(boldTypeface)
    }
}