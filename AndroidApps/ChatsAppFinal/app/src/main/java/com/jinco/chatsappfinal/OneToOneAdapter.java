package com.jinco.chatsappfinal;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import java.util.ArrayList;
import java.util.Objects;


public class OneToOneAdapter extends AppCompatActivity {
    private static final String activityName = "OneToOneChats";
    private static final FirebaseDatabase database = FirebaseDatabase.getInstance();
    private static final DatabaseReference myRef = database.getReference();
    private static final DatabaseReference myErrorRef = database.getReference().child("errors").child(activityName);
    private Error error_class = new Error();
    private mydatabase db = new mydatabase(this);
    private ListView lst_conv;
    private ArrayList<String> a_partnersName = new ArrayList<>();
    private ArrayList<String> a_partnersId = new ArrayList<>();
    private ArrayList<String> a_roomsKey = new ArrayList<>();
    private ArrayList<Message> a_lastMsg = new ArrayList<>();
    private ArrayList<Message> a_onlineMsgs = new ArrayList<>();
    private String userId;
    private int index;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_one_to_one_adapter);

        try {
            lst_conv = findViewById(R.id.Lst_conv);
            userId = db.getString("SELECT user_id FROM user ORDER BY id DESC LIMIT 1");
            getRoomsKey();
            _viewData();
            lst_conv.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                    goToOneToOne(position);
                }
            });
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }

    }

    private void getRoomsKey() {
        try {
            myRef.child("oneToOneRooms").child(userId).addValueEventListener(new ValueEventListener() {
                @Override
                public void onDataChange(@NonNull DataSnapshot snapshot) {
                    for (DataSnapshot singleSnapshot : snapshot.getChildren())
                        a_roomsKey.add(singleSnapshot.getKey());
                    if (a_roomsKey.size() > 0)
                        _getRoomsKey();
                }
                @Override
                public void onCancelled(@NonNull DatabaseError error) {
                }
            });
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }
    private void _getRoomsKey() {
        try {
            for (int i = 0; i < a_roomsKey.size(); i++) {
                if (userId.compareTo(a_roomsKey.get(i)) >= 0)
                    a_roomsKey.set(i, userId + "-" + a_roomsKey.get(i));
                else
                    a_roomsKey.set(i, a_roomsKey.get(i) + "-" + userId);
            }
            getMsgs();
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }
    private void getMsgs() {
        try {
            if (index < a_roomsKey.size())
                _getMsgs();
            _viewData();
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }
    private void _getMsgs() {
        try {
            myRef.child("oneToOne").child(a_roomsKey.get(index)).addListenerForSingleValueEvent(new ValueEventListener() {
                @Override
                public void onDataChange(@NonNull DataSnapshot snapshot) {
                    for (DataSnapshot singleSnapshot : snapshot.getChildren())
                        a_onlineMsgs.add(singleSnapshot.getValue(Message.class));
                    saveLocalDB();
                    index++;
                    getMsgs();
                }
                @Override
                public void onCancelled(@NonNull DatabaseError error) {
                }
            });
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }
    private void saveLocalDB() {
        try {
            String userName, userGender, sender_userId, msgId, msg;
            boolean result;
            for (int i = 0; i < a_onlineMsgs.size(); i++) {
                msgId = a_onlineMsgs.get(i).msgId;
                int id = db.getInteger("SELECT id FROM chat WHERE msgId ='" + msgId + "'");
                if (id == -1) {
                    sender_userId = a_onlineMsgs.get(i).userId;
                    userName = a_onlineMsgs.get(i).userName;
                    userGender = a_onlineMsgs.get(i).userGender;
                    msg = a_onlineMsgs.get(i).msg;
                    result = db.insertMsg(msgId, userName, sender_userId, msg, userGender, a_roomsKey.get(index));
                    if (!result)
                        Toast.makeText(this, getResources().getString(R.string.ErrorSave), Toast.LENGTH_LONG).show();
                    if (!sender_userId.matches(userId)) {
                        String qry = "REPLACE INTO partners(roomId, partner) VALUES('" + a_roomsKey.get(index) + "','" + userName + "')";
                        db.insertPartner(qry);
                    }
                }
            }
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }
    private void _viewData() {
        try {
            String allConv_qry = "SELECT DISTINCT groupNumber FROM chat WHERE groupNumber LIKE '%" + userId + "%' ORDER BY id DESC";
            a_partnersId.clear();
            a_partnersName.clear();
            a_lastMsg.clear();
            ArrayList<String> a_oneToOneChats = db.getOneToOneChats(allConv_qry);
            if (a_oneToOneChats.get(0).length() > 0) {
                String partnerId, partnerName_qry;
                for (int i = 0; i < a_oneToOneChats.size(); i++) {
                    partnerId = a_oneToOneChats.get(i).replace(userId, "");
                    partnerId = partnerId.replace("-", "");
                    a_partnersId.add(partnerId);
                    partnerName_qry = "SELECT userName FROM chat WHERE userId LIKE '%" + partnerId + "%' ORDER BY id DESC LIMIT 1";
                    a_partnersName.add(db.getString(partnerName_qry));
                    String qry = "SELECT * FROM chat WHERE groupNumber LIKE '%" + partnerId + "%' ORDER BY id DESC LIMIT 1";
                    a_lastMsg.add(db.getLastMsg(qry));
                }
                viewData();
            }
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }
    private void viewData() {
        try {
            Listadapter listadapter = new Listadapter();
            lst_conv.setAdapter(listadapter);
        }catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }
    private void goToOneToOne(int position) {
        try {
            String id = a_partnersId.get(position);
            String name = a_partnersName.get(position);
            Intent intent = new Intent(this, OneToOne.class);
            intent.putExtra("id", id);
            intent.putExtra("name", name);
            startActivity(intent);
        } catch (Exception e) {
            String functionName = Objects.requireNonNull(new Object() {
            }.getClass().getEnclosingMethod()).getName();
            int i = 0;
            for (StackTraceElement ste : e.getStackTrace()) {
                if (ste.getClassName().contains(activityName))
                    break;
                i++;
            }
            String lineError = e.getStackTrace()[i].getLineNumber() + "";
            String msg = e.getMessage();
            error_class.sendError(myErrorRef, lineError, msg, functionName);
        }
    }
    class Listadapter extends BaseAdapter {
        @Override
        public int getCount() {
            return a_partnersName.size();
        }
        @Override
        public Object getItem(int position) {
            return a_partnersName.get(position);
        }
        @Override
        public long getItemId(int position) {
            return 0;
        }
        @Override
        public View getView(final int position, View convertView, ViewGroup parent) {
            LayoutInflater inflater = getLayoutInflater();
            convertView = inflater.inflate(R.layout.activity_one_to_one_adapter, parent, false);
            TextView lastMsg = convertView.findViewById(R.id.txt_lastMsg);
            TextView txt_partnerName = convertView.findViewById(R.id.txt_partnerName);
            txt_partnerName.setText(a_partnersName.get(position));
            String s = "";
            if (a_lastMsg.get(position).userId.matches(userId))
                s = "you: ";
            lastMsg.setText(s + a_lastMsg.get(position).msg);
            return convertView;
        }
    }
}