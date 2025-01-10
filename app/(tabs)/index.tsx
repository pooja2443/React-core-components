import React,{Component} from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View 
      style={{ flex: 1, backgroundColor: "plum", justifyContent: "space-evenly", alignItems: "center", flexDirection : "row",flexWrap: "wrap" }}>
      <View style={{ height: 400, width: 400, backgroundColor: "lightblue", marginBottom: 10,justifyContent: "center" ,alignItems: "center"}}>
          <View style={{ height: 300, width: 300, backgroundColor: "lightgreen", marginBottom: 10,justifyContent: "center" ,alignItems: "center",padding : 20}}>
            <Text style = {{alignItems : "center", textAlignVertical : "center", color : "blue",fontWeight : "bold"}}>LEARNING CORE-COMPONENETS OF REACT NATIVE</Text>
          </View>
        
      </View>
      
     
    </View>
  );
}





