package com.jinco.recordkeeper

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.jinco.recordkeeper.databinding.FragmentRunningBinding

class RunningFragment : Fragment() {
    private lateinit var binding: FragmentRunningBinding
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentRunningBinding.inflate(inflater, container, false)
        return binding.root
//        val view = inflater.inflate(R.layout.fragment_running, container, false)
//        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        setupClickListeners()
    }

    private fun setupClickListeners() {
        binding.con5km.setOnClickListener {
            launchRunningRecordScreen("5km")
        }

        binding.con10km.setOnClickListener {
            launchRunningRecordScreen("10km")
        }

        binding.conHalf.setOnClickListener {
            launchRunningRecordScreen("half")
        }

        binding.conFull.setOnClickListener {
            launchRunningRecordScreen("full")
        }
    }

    private fun launchRunningRecordScreen(distance:String) {
        val intent = Intent(context, RunRecordActivity::class.java)
        intent.putExtra("Distance", distance)
        startActivity(intent)
    }
}