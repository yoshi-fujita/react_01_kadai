# 課題：REACT課題のシンプルAPI：割り勘の計算

## 使い方
- トータル金額と人数を渡すと、a・b・c ３パターンの割り勘を提示してくれる。３パターンの違いは、bossが10円単位で多めに払う、100円単位で多めに払う、1000円単位で多めに払う
  - curl -X POST -H "Content-Type: application/json" -d "{\"total\":\"10000\",\"number\":\"3\"}" localhost:3001/warikan
  - {"status":200,"result":{"a_boss":3340,"a_others":3330,"b_boss":3400,"b_others":3300,"c_boss":4000,"c_others":3000},"message":"successfully get Warikan!"}
