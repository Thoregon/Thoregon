/**
 *
 *
 * @author: blukassen
 */

// export { default as VAPID }     from "./vapid.json";        // todo: maybe store encoded in matter, passphrase in a vault

// import { browserloader }            from '/evolux.universe';

export const DEBUG    = false;
export const GUNDEBUG = true;

const TESTIDENTITY = {
    alias: 'testuser',
    pairs :  {
        "spriv": "6qVy7_nSSpID_l52VTxiIXGM5f2_tFr_0PwLmZNvwKQ",
        "spub": "9pE55g0wLnYWsO7StqLuU_aMS7B0eyrPZmUJMy30zyA.om3gh6eVdZAOkthFVWOfTRN263oxVxfN-XusHCRq9TA",
        "epriv": "LR8F3zbKrlXBiXI2-iBqanG7Ly3HqaX2g_G91_Nr9Rc",
        "epub": "Aw8nkkcW5gWPQ7QUnR15LSL6xvey2cPL3rxTytCV9tk.8i29pajwLhr_Fg3A7xqxp94cqYqC7qedvNHbrxTMm3I",
        "apriv": "CUseGLiq9FRJtjgpmGLLD7vUlS3LsEavUaXY4i7DUBsyYy50IPtcaGMVjoi08OpjJSrgmuyFOmEOiB_eOR0wkszXf48GDB0CrsvUASHnWSfvs5AQexsjD1jsqJOek4f4LkHAujrNTg5sv1Ulz-E1VP-oh4VPPpwoTYM3DthJx0MKN3_21btZA3CftA-oKH9zsc5mGfHTqcuHJ2vEBj8aL2DMN34zvpfNnMxJlLvsM99IFXNg2fjft4OLCllEWoGoCAhIFYP7h-UwXGHORrGJtNWiuXwxCDxxR4LdI4aOmBxaQ6qQySB6FuJsNKOXgE4OikJWpyQqnzANilUFuov-9qAtA9OqjLpZz_iivFvh4EtjzYlHiw1BeOKqp85bK_Q9qowF6y4tDy7880FB6IlfjZl6GR-HdPyKVngiIILbZkNYHH_3oKjre8Go4cZ_G1pTYcvQJS2snMKtwfjdBXyLdO75cRxoIvx94UBuPHnlkjV1T6fffV1mgNFXZh8BSwSx0h-NnYY0FEds3htNquXp5kjgKiAtoAklhE91IUyQ64UufIpZO8LZSJ2L4nRL8RRo0QMzBOF6C8Nx2yd8XiuGCt3BPcmvCT5ZBN8cTiaGdSHvz6BBYgcwOx7k9cN9lRNTlhvYIkltsK5_tQBMhGgteqFSkUDeXGdTN6CnACEsBUE.SWh9hojG5ekCB0vHRhTMriGRKFETqhVnYetzl2zi3J6_RwijP1CuIJ_HBoCPl86j4Cb5n8uIFsVbl4fPbchIrXHWdAavj-TgkNH3ToBYHUAwXknywTBj17OUqphpeBXN5ZyvNqYjmpKZZG9TOSFMmYnogfA6qohy0Ss3i_lYyyjtZS7SgcH4K2EohdL2AIB4u2k7leaVV3W2gJ-hY-6hVK9qwkxQVmXsqjt1FF5TE-62JzyRDZubEd0RagsJLaciatwIGB1W0Thc7S_Q4UK9zpKxEJum7iHPxNiMRr5M7IvYlA6dgKTCZZutpUtNFISjW7EpjhLCK9ILK32Nyf6loQ.BRKoIMa-j6ACaygx8u-EWJcEz3ucNbDjo3UjOY-glHB2UEcpWcPw_A1_jFqkRzoeq337iuXYqjkQ78lDWsDaZjGPcuDvKXs9UCOB3kBBlfj60DPsVcCCRME6YjhMbX6dcE5gkb-yG9gufvLQwksSElRvTTfZMG5lDzXwMcEcu35J4cGrnItgr-lny8UXSDrx8-2lIDvP1NfVh54pJ6D10r2PXQ2PO7VM8veB69NS3JzLEsZkbk_ZX-g424r8mNstPcOdaSt1k4AvdC2dswltLj9_FLTJeU6gbLX7vBQM4lsd5BLtn_HA6oWpzi_UNhVpv2ORO0aV19n8_JCJDxi8TQ.tky68xvxXVioJsMR5TYhcsYsXanJwYDtQK7lafGOW1_k53fdBCza0XNQgJhJruFuiLLSjABRcYBqI0cOjqDizjnzT6bu2MXnT_UuRxmNc7lD7Ukt1YVqKTjukXQFJTRP2_tTIqysn1tSC6OGtOkHcsga6J4OjWbSiW0UT1UGBNA5M-NeTPG6fGjBc2xJQ6EAU4btaCBOIJRqlGoBOhcsZueGpnV7gHahG_XC7ri8LBiEJ82azo5_EmjdIL3tcI-iV4c_9x3jBt_qDX-hBlh0V-nmCKbtG1B-lDOKfS4PYDxBSO7LVf3ynlgMMBqtAjAvOXVhgI-TJQ-cQ-6I0SlqfBQd1R9dP2rrcScIFphKSBKZYFysX7WQBRf90pkxYmm8aXioJ8bHxQtKt5N947vMDQfLxA2kxCi1Wy-Bi8moJLPtEfadavU53VG2vriNYiMyuZaSSf3HR_6PC4x9UdXO-5TqOtKh19a-RhCRT_cDFM0DZ_ZwA91txyR8-yhzzb0PpdPMGQkKeNTuSdXwZg5TrNR7w1iohfxE8hrmfUyIOMVdmdAMwq455r6y2TtqxZXvcWbxQQea5e6iLCou1BzorOJ1YsLq6PYkl0iRTBmLaMH2y3eTNRvZJd64uiD6F2EQF9Fi3rWeY4PB0TFgmOCA1BMLJN4js8EsECB_sc_MhoM.82hXi04A8QNalB5kqZ9wN4Qq-U6HZCxQwtZuGt54cu7CYjPP-QE_x8_qvHLwXxkVk145agCyqplbzbzeR7m6Nci-oOgmUfD0nHGDviWEe5Fbg24ReWpqY_Uf-zIc48suRUac8ivv5Y3kCWL9OJ7re0xn0qAE5-JvR74byPBZyoed2Yjp30n4EJiTVLas553-axaWrK5GW1o8xqmR-nuN6IOwzn9n7LRizSNqUn9qnN_J_RuoG9RwB5DcYgcqWYDwoCwt54n3QGaOrOvcNs8Kppj17VUNEOLlKJv1eUC-YdnOPIcwcc0jJOA3907yzKQTo8mDanvnX1gF389rgqDjIQ.v7sVeJlxcEmHaAaoxEbCTduX1-e-DSd3os8V9AUKWCUFIP4sbXDnfdtT1c3ls5VkVbmVPeqtCf_gPI9f9ywqYNfKU1KukQmQ4uOnraNCw9kj5wK8oVey01b6TvAmpmQ8E3XxQUtF6U6XpBGsToRV1dnbCjWBEyGV8H94IUNkxt4_MdWu1QlV0af3UL1sjz1xg1YUWxT5TjKL4KfT-TnKzplC0l6Ha9pNZobGUtwUEapTM-OJZ651e10fjy74ASXPH7hsL18v-cOcQIbruQGCKp52I2m7zmjIGJFW0ZxXKjlRq6xk0PXK5FR-8cXj77RivSrn6YhI_xbcDvz94PdZIw.xMDjLiKuQKFM38IZ6Ne4RoaMO39YrXb00qyHPwixmVAnxsLMFiMcUYx1baADk9K5VsGhS_KTDNMukoxZYK2unghpQ1MLXTV3rzYCqROACJGJIIjXZ-Fe_cqbvC6thiWzc6L1_1GqqNxzkKhK6SfH6Oe6qnt4G-pNuGWbkaK3AfvSBrZodcaAgS9xBdm7Tnns0kq-IeLgYKmdc-TpRozQDtCzG18_aMe3DTTb-lIbIuy9PfKDnYQFDnAUdn0s_XBJdcdsA75eGIZLfB_jWC1O92LIO7t1oZJKdiOSD_B4JX6XI7AqdDJaD_F1uhZ5O10HfcF3L24GZItJvqi9UsHOPw",
        "apub": "tky68xvxXVioJsMR5TYhcsYsXanJwYDtQK7lafGOW1_k53fdBCza0XNQgJhJruFuiLLSjABRcYBqI0cOjqDizjnzT6bu2MXnT_UuRxmNc7lD7Ukt1YVqKTjukXQFJTRP2_tTIqysn1tSC6OGtOkHcsga6J4OjWbSiW0UT1UGBNA5M-NeTPG6fGjBc2xJQ6EAU4btaCBOIJRqlGoBOhcsZueGpnV7gHahG_XC7ri8LBiEJ82azo5_EmjdIL3tcI-iV4c_9x3jBt_qDX-hBlh0V-nmCKbtG1B-lDOKfS4PYDxBSO7LVf3ynlgMMBqtAjAvOXVhgI-TJQ-cQ-6I0SlqfBQd1R9dP2rrcScIFphKSBKZYFysX7WQBRf90pkxYmm8aXioJ8bHxQtKt5N947vMDQfLxA2kxCi1Wy-Bi8moJLPtEfadavU53VG2vriNYiMyuZaSSf3HR_6PC4x9UdXO-5TqOtKh19a-RhCRT_cDFM0DZ_ZwA91txyR8-yhzzb0PpdPMGQkKeNTuSdXwZg5TrNR7w1iohfxE8hrmfUyIOMVdmdAMwq455r6y2TtqxZXvcWbxQQea5e6iLCou1BzorOJ1YsLq6PYkl0iRTBmLaMH2y3eTNRvZJd64uiD6F2EQF9Fi3rWeY4PB0TFgmOCA1BMLJN4js8EsECB_sc_MhoM"
    },
    salt: '0qmLV1600',
    anchor: 'eXup3uod43ud0e600DFUyA85IjSkG249'
};

universe.atDawn(async universe => {
    await universe.Identity.useIdentity(TESTIDENTITY);

    const ssi = await me.ssi();
})

/*
 * publish HTTP interface
 */
/*
browserloader.serve({
    // root: 'www/',        --> default
    // common: './',        --> default
    // index: 'index.mjs',  --> default
    port: 8070,
    host: "0.0.0.0",
    // cachecontrol: 'public, max-age=120'     // fresh in seconds = 2 minutes
});
*/
