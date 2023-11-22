package com.VTI.Phongtro.Utils;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class NormalUtils {
    public String ngayGhiDienNuoc(){
        String timeStamp = new SimpleDateFormat("yyyyMMdd").format(Calendar.getInstance().getTime());

        return timeStamp;
    }
}
