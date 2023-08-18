import { View, Text, ScrollView,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import SingleItem from '../components/SingleItem';
import { useSelector } from 'react-redux';
import Swiper from 'react-native-swiper';

export default function SearchResults() {
    const search_items = useSelector((state) => state.search_items);
    const [elts, setElts] = useState(search_items.data);
    useEffect(() => {
        if (search_items.data) {
          setElts(
            [...new Set(search_items.data?.map((item) => item.item_id))].map(
              (item) => search_items.data?.find((elt) => elt?.item_id === item)
            )
          );
        }
      }, [search_items]);
      console.log(elts,search_items.data)
  return (
    <View style={styles.container}>

        <View>
            <Text>
               
            </Text>
            <Text style={styles.header}> {elts.length>0?"Vos Resultats":"Aucune Resultat"}</Text>

        </View>
        <Swiper paginationStyle={{display:"none"}}   showsButtons loop={false}>
            {
                elts?.map(item=>(
                  <SingleItem data={item} key={item?.id} /> 
                ))
            }
        </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:10,
        flex:1,
        maxWidth:"100%"
    },
    header:{
        fontFamily: "Hoefler",
        color: "#104d69",
        fontSize: 29,
        textDecorationColor:"#104d69",
        textDecorationStyle:"solid"
    }
})