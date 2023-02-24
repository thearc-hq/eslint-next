/**
 * @fileoverview Index file to allow YAML file to be loaded
 * @author Nico Hülscher
 */
'use strict';

module.exports = {
  extends: ['./default.yml'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};