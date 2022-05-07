package com.jinco.recordkeeper

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.jinco.recordkeeper.databinding.FragmentCyclingBinding

class CyclingFragment : Fragment() {
    private lateinit var binding: FragmentCyclingBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = FragmentCyclingBinding.inflate(inflater, container, false)
        return binding.root
//        return inflater.inflate(R.layout.fragment_cycling, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        setClickListeners()
    }

    private fun setClickListeners() {
        binding.con5km.setOnClickListener { launchCycleRecordScreen("5km") }
        binding.con10km.setOnClickListener { launchCycleRecordScreen("10km") }
        binding.conHalf.setOnClickListener { launchCycleRecordScreen("half") }
        binding.conFull.setOnClickListener { launchCycleRecordScreen("full") }
    }

    private fun launchCycleRecordScreen(distance: String) {
        val intent = Intent(context, CyclingFragment::class.java)
        intent.putExtra("Distance", distance)
        startActivity(intent)
    }
}