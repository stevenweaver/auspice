import React from "react";
import Radium from "radium";
import {headerFont, darkGrey, medGrey} from "../../globalStyles";

@Radium
class HeaderFont extends React.Component {

  static propTypes = {
    /* react */
    style: React.PropTypes.object,
  }
  static defaultProps = {
  }
  getStyles() {
    return {
      base: {
        fontFamily: headerFont,
        fontSize: 16,
        lineHeight: "28px",
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 500,
        color: medGrey
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <span style={[
        styles.base,
        this.props.style
      ]}>{this.props.children}</span>
    );
  }
}

export default HeaderFont;
