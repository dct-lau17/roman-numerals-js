describe('romanNumerals', function(){

  describe('numbers 1- 9', function(){
    it('returns 1 as I', function(){
      expect(romanNumerals(1)).toEqual('I');
    })

    it('returns 3 as III', function(){
      expect(romanNumerals(3)).toEqual('III');
    })

    it('returns 4 as IV', function(){
      expect(romanNumerals(4)).toEqual('IV');
    })

    it('returns 5 as V', function(){
      expect(romanNumerals(5)).toEqual('V');
    })

    it('returns 6 as VI', function(){
      expect(romanNumerals(6)).toEqual('VI');
    })

    it('returns 9 as IX', function(){
      expect(romanNumerals(9)).toEqual('IX');
    })
  })

  describe('numbers 10-99', function(){
    it('returns 10 as X', function(){
      expect(romanNumerals(10)).toEqual('X');
    })

    it('returns 25 as XXV', function(){
      expect(romanNumerals(25)).toEqual('XXV');
    })

    it('returns 39 as XXXIX', function(){
      expect(romanNumerals(39)).toEqual('XXXIX');
    })

    it('returns 50 as L', function(){
      expect(romanNumerals(50)).toEqual('L');
    })

    it('returns 50 as L', function(){
      expect(romanNumerals(99)).toEqual('XCIX');
    })
  })

  describe('numbers 100-999', function(){
    it('returns 100 as C', function(){
      expect(romanNumerals(100)).toEqual('C')
    })

    it('returns 101 as CI', function(){
      expect(romanNumerals(101)).toEqual('CI')
    })

    it('returns 999 as CMXCIX', function(){
      expect(romanNumerals(999)).toEqual('CMXCIX')
    })

    it('returns 555 as DLV', function(){
      expect(romanNumerals(555)).toEqual('DLV')
    })

    it('returns 209 as DLV', function(){
      expect(romanNumerals(209)).toEqual('CCIX')
    })

  });
})
