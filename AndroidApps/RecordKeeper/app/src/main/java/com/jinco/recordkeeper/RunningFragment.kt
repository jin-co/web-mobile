package com.jinco.recordkeeper

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.jinco.recordkeeper.databinding.FragmentRunningBinding

class RunningFragment:Fragment() {
    private lateinit var binding: FragmentRunningBinding
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentRunningBinding.inflate(inflater, container, false)
        return  binding.root
//        val view = inflater.inflate(R.layout.fragment_running, container, false)
//        return view
    }
}