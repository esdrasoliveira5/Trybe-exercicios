const ping = (_req, resp) => {
  resp.status(200).json({message: 'PONG'});
}

module.exports = {
  ping
};