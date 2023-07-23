import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import DropdownMenu from "react-native-dropdown-menu";
import Icon from "react-native-vector-icons/FontAwesome";

const IconOptions = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSearch = () => {
    // Handle search action
    closeDropdown();
  };

  const handleAdd = () => {
    // Handle add action
    closeDropdown();
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown}>
        <Icon style={styles.button} name="ellipsis-v" size={30} color="#000" />
      </TouchableOpacity>
      {isDropdownOpen && (
        <DropdownMenu
          style={{ flex: 1 }}
          bgColor={"white"}
          tintColor={"#666666"}
          activityTintColor={"green"}
          handler={closeDropdown}
          data={[
            [
              <Icon name="plus" size={20} color="#000" />,
              <Icon name="search" size={20} color="#000" />,
            ],
          ]}
          onSelect={(index, option) => {
            if (index === 0) {
              handleAdd();
            } else if (index === 1) {
              handleSearch();
            }
          }}
          renderRow={(option, index, isSelected) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 8,
              }}
            >
              {option}
              {index === 1 && <Text style={{ marginLeft: 8 }}>Add</Text>}
              {index === 1 && <Text style={{ marginLeft: 8 }}>Search</Text>}
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 27,
    marginTop: 7,
  },
});

export default IconOptions;
