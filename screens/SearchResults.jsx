import { View, Text, ScrollView,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import SingleItem from '../components/SingleItem';
import { useSelector } from 'react-redux';

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
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View>
            <Text>
               
            </Text>
            <Text style={styles.header}> Vos Resultats</Text>

        </View>
        {
            elts?.map(item=>(
               <SingleItem data={item} key={item.id} /> 
            ))
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:10,
    },
    header:{
        fontFamily: "Hoefler",
        color: "#104d69",
        fontSize: 29,
        textDecorationColor:"#104d69",
        textDecorationStyle:"solid"
    }
})