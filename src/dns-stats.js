const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // Initialize the result object to store DNS appearance counts
  const dnsStats = {};

  // Loop through each domain in the input array
  for (const domain of domains) {
    // Split the domain into subdomains (in reverse order)
    const subdomains = domain.split('.').reverse();

    // Initialize an empty string to build the DNS chain
    let dnsChain = '';

    // Loop through each subdomain in the reversed subdomains array
    for (const subdomain of subdomains) {
      // Append the current subdomain to the DNS chain
      dnsChain += '.' + subdomain;
      // If the DNS chain is not already in the result object, add it with an initial count of 1
      // Otherwise, increment the count for the existing DNS chain
      if (!dnsStats.hasOwnProperty(dnsChain)) {
        dnsStats[dnsChain] = 1;
      } else {
        dnsStats[dnsChain]++;
      }
    }
  }

  // Return the result object containing DNS appearance counts
  return dnsStats;
}


module.exports = {
  getDNSStats
};
