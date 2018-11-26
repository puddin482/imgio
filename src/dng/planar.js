// Describes the component layout in an image.
// Contiguous means RGBRGBRGB
// Separate means RRRGGGBBB

const planarConfigurationMap = [
  { id: 1, name: 'Contiguous' },
  { id: 2, name: 'Separate' },
];

function getType(typeId) {
  return planarConfigurationMap[typeId - 1];
}

module.exports = { getType };
