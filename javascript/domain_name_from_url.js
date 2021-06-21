function domainName(url){
  let parts = url.split(/[/\.]+/)
  if(!(parts[0].match(/:$/) || parts[0] == 'www')) return parts[0]
  return (parts[1] == 'www') ? parts[2] : parts[1]
}
