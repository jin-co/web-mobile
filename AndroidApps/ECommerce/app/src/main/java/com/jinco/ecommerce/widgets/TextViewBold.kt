package com.jinco.ecommerce.widgets

import android.content.Context
import android.graphics.Typeface
import android.util.AttributeSet
import androidx.appcompat.widget.AppCompatTextView

class TextViewBold(context:Context , attributeSet: AttributeSet)
    : AppCompatTextView(context, attributeSet) {

    init {
        makeBold()
    }

    private fun makeBold() {
        val boldTypeface: Typeface =
            Typeface.createFromAsset(context.assets, "Montserrat-Bold.ttf")
        setTypeface(boldTypeface)
    }
}