describe('romanNumerals', function(){
  it('returns 1 as I', function(){
    expect(romanNumerals(1)).toEqual('I')
  })

  it('returns 3 as III', function(){
    expect(romanNumerals(3)).toEqual('III')
  })

  it('returns 5 as V', function(){
    expect(romanNumerals(5)).toEqual('V')
  })
})
