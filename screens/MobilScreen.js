import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Store extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Velgg",  price:"$ 50.00 USD", image:"https://beritabalap.com/wp-content/uploads/2019/08/Port-Rim-RCB-FG-525-BeritaBalap-700x400.jpg"},
        {id:2, title: "Ban luar",  price:"$ 41.13 USD", image:"https://www.otoflik.com/wp-content/uploads/2018/07/Harga-Ban-Battlax-Bridgestone.jpg"} ,
        {id:3, title: "Mesin",  price:"$ 200 USD", image:"https://cdn.shopify.com/s/files/1/0022/4323/1856/products/image_bb7f128d-e9e0-4589-ad56-e3ec91249966_480x480.jpg?v=1537392109"}, 
        {id:4, title: "Body kit",  price:"$ 400.00 USD", image:"https://s4.bukalapak.com/img/9010616769/w-300/2019_04_29T06_33_33_07_00.jpg.webp"}, 
        {id:6, title: "Tempat duduk",  price:"$ 33.00 USD", image:"https://www.mbtech.info/Desain/Jok-Motor/jok-motor.jpg"}, 
        {id:7, title: "Stir",  price:"$ 350.95 USD", image:"https://harga.timbangharga.com/id/350/products/p/8/igawa-stang-stir-setang-jepit-clip-on-multi-cb-150-r-2016silver-1698-0650368-32f97c02da9e5a3798c8dbeae85003e3-product.jpg"}, 
        {id:8, title: "Kenalpot",  price:"$ 30.60 USD", image:"https://moedah.com/wp-content/uploads/2017/06/40443412_ec0f7257-8e5c-476d-bafe-e4d4292f4a64.jpg"},
        {id:9, title: "ECU",  price:"$ 26.30 USD", image:"https://ecs7.tokopedia.net/img/cache/700/product-1/2019/6/16/4075608/4075608_7047be9f-d620-402f-838d-f0523acd27f8_700_700.jpg"},
        {id:9, title: "lampu LED", price:"$ 21.30 USD", image:"https://ecs7.tokopedia.net/img/cache/700/product-1/2016/4/21/5418731/5418731_330a83f6-c59d-447c-a002-9334b0dc37f8.jpg"},
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.image}}/>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   