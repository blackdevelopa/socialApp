import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 40
  },
  headerText: {
    fontWeight: '700',
    fontSize: 24,
  },
  hero: {
    flexDirection: 'row',
    marginHorizontal: 30
  },
  heroTextHeavy: {
    marginRight: 15,
    fontWeight: '500'
  },
  heroTextFaint: {
    fontWeight: '100',
    color: 'grey'
  },
  touch: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 20,
    alignItems: 'center',
    marginBottom: 40,
    padding: 15,
    borderWidth: 1,
    // borderColor: 'grey',
    // shadowColor: 'green',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 2
    }
  },
  touchImg: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 20
  },
  touchText: {
    marginRight: 20
  },
  touchName: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10
  },
  touch1: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 10,
    alignItems: 'center',
  }
})