import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text,
  StyleSheet,
} from 'react-native';
import factoryIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';
import cookieIcon from '../../assets/troop/cookie.png';
import goldIcon from '../../assets/gold.png';
import Colors from '../common/colors';
import { CardView } from '../common/components';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.textColor,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: Colors.greenColor,
  },
  resourceIcon: {
    width: 14,
    height: 14,
    marginHorizontal: 4,
  },
  buildingIcon: {
    width: 32,
    height: 32,
    marginRight: 4,
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowFlexSpaceAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resourceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function ResourceView({
  buildingIcon,
  resourceIcon, amount, changeRate,
}) {
  let changeRateStr;
  let textColor;
  if (changeRate < 0) {
    changeRateStr = `${changeRate}/minute`;
    textColor = Colors.orangeColor;
  } else {
    changeRateStr = `+${changeRate}/minute`;
    textColor = Colors.greenColor;
  }

  return (
    <View style={styles.resourceView}>
      <Image style={styles.buildingIcon} source={buildingIcon} />
      <View>
        <View style={styles.rowFlex}>
          <Text style={styles.text}>{amount}</Text>
          <Image style={styles.resourceIcon} source={resourceIcon} />
        </View>
        <View>
          <Text style={{ ...styles.subText, color: textColor }}>{changeRateStr}</Text>
        </View>
      </View>
    </View>
  );
}

ResourceView.propTypes = {
  resourceIcon: PropTypes.number.isRequired,
  buildingIcon: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  changeRate: PropTypes.number.isRequired,
};

function Resources() {
  return (
    <CardView style={styles.rowFlexSpaceAround}>
      <ResourceView
        buildingIcon={factoryIcon}
        resourceIcon={cookieIcon}
        amount={233}
        changeRate={-233}
      />
      <ResourceView
        buildingIcon={mineIcon}
        resourceIcon={goldIcon}
        amount={233}
        changeRate={233}
      />
    </CardView>
  );
}

export default Resources;