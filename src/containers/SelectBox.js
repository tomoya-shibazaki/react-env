import React, { useEffect } from "react";


const SelectBox = () => {
    return(
      <select name="skills" multiple="" className="ui fluid dropdown">
          <option value="">Skills</option>
          <option value="angular">Angular</option>
          <option value="css">CSS</option>
          <option value="design">Graphic Design</option>
          <option value="ember">Ember</option>
          <option value="html">HTML</option>
          <option value="ia">Information Architecture</option>
          <option value="javascript">Javascript</option>
          <option value="mech">Mechanical Engineering</option>
          <option value="meteor">Meteor</option>
          <option value="node">NodeJS</option>
          <option value="plumbing">Plumbing</option>
          <option value="python">Python</option>
          <option value="rails">Rails</option>
          <option value="react">React</option>
          <option value="repair">Kitchen Repair</option>
          <option value="ruby">Ruby</option>
          <option value="ui">UI Design</option>
          <option value="ux">User Experience</option>
      </select>
    )
}

export default SelectBox