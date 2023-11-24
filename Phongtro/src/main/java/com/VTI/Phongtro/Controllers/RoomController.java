package com.VTI.Phongtro.Controllers;

import com.VTI.Phongtro.Entities.Room;
import com.VTI.Phongtro.Entities.RoomStat;
import com.VTI.Phongtro.Services.RoomServices;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/room")
public class RoomController {
    private final RoomServices roomServices= new RoomServices();

    @GetMapping("/getAllRooms")
    public ResponseEntity<String> GetAllRoom(){
        String result = new Gson().toJson(roomServices.getAllRoom());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
    @GetMapping("/getRoomById")
    public ResponseEntity<String> GetRoomById(@RequestParam("id") String id){
        Room room = roomServices.getRoomById(id);
        String result = new Gson().toJson(room);
        if (result.contains("null")){
            return new ResponseEntity<>("Cant find this room",HttpStatus.OK);
        }
        return new ResponseEntity<>(result,HttpStatus.OK);
    }
    @GetMapping("/getEmptyRoom")
    public ResponseEntity<String> GetEmptyRoom(){
        String result = new Gson().toJson(roomServices.getEmptyRoom());
        return new ResponseEntity<String>(result,HttpStatus.OK);
    }
    @GetMapping("/getNotEmptyRoom")
    public ResponseEntity<String> GetNotEmptyRoom(){
        String result = new Gson().toJson(roomServices.getNotEmptyRoom());
        return new ResponseEntity<String>(result,HttpStatus.OK);
    }
    @PostMapping("/addNewRoom")
    public ResponseEntity addNewRoom(@RequestBody Room room){
        
        boolean result = roomServices.addRoom(room);
        if (!result){
            return new ResponseEntity("Something wentWrong!",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Room added",HttpStatus.OK);
    }
    @PutMapping("/changeStatus")
    public ResponseEntity changeStatus(@RequestParam("id")String id){
        // 0 <--> 2
        // Trống <--> sửa chữa
        String result = roomServices.changeStatusRoom(id);
        if (result.contains("Lỗi")){
            return new ResponseEntity(result,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(result,HttpStatus.OK);
    }
    @PutMapping("/updateDetailRoom")
    public ResponseEntity UpdateDetailRoom(@RequestParam("id")String id, @RequestBody Room room){
        // Price, Name
        boolean result = roomServices.updateDetailRoom(id, room);
        if (!result){
            return new ResponseEntity("Something wentWrong!",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Room updated",HttpStatus.OK);
    }
    @PutMapping("/addRenterToRoom")
    public ResponseEntity AddRenterToRoom(@RequestParam("renter_id")String renter_id, @RequestParam("room_id") String room_id){
        // Price, Name
        boolean result = roomServices.addRenterToRoom(room_id, renter_id);
        if (!result){
            return new ResponseEntity("Something wentWrong!",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("renter added to room",HttpStatus.OK);
    }
    @GetMapping("/getRenterInRoom")
    public ResponseEntity<String> GetRentersInRoom(@RequestParam("room_id") String roomId){
        String result = new Gson().toJson(roomServices.getAllRentersInRoom(roomId));
        return new ResponseEntity<String>(result,HttpStatus.OK);
    }
    @GetMapping("/getNewestStat")
    public ResponseEntity<String> GetNewestCommitedStat(@RequestParam("room_id") String roomId){
        String result = roomServices.getNewsetStat(roomId);
        return new ResponseEntity<String>(result,HttpStatus.OK);
    }
    @PostMapping("/addRoomRecord")
    public ResponseEntity<String> AddRoomRecord(@RequestParam("room_id") String roomId, @RequestBody RoomStat roomStat){
        String result = roomServices.addRoomStat(roomId, roomStat);
        return new ResponseEntity<String>(result,HttpStatus.OK);
    }
}
