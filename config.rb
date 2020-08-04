Encoding.default_external = 'UTF-8'

# プラグインを追加する場合は以下に追記して下さい。

# プロジェクト配下のディレクトリ構成を以下に設定して下さい。
http_path = "/"
css_dir = "/css"
sass_dir = "/scss"
images_dir = "/img"
javascripts_dir = "/js"

# キャッシュ保存の有無
cache = false

# 出力形式を指定して下さい。
#----------------------------------------------------------------------------------------------------
# :nested        ネストっぽくインデントを無理やり入れて表示。 (ただし、実際にはネストされて無くて全て独立。)
# :expanded      {} で改行する形。よくみる CSS の記述形式。可読性が良い。
# :compact       セレクタと属性を 1 行にまとめて出力。
# :compressed    圧縮して出力（全ての改行・コメントを削除）。可読性が悪い。
#----------------------------------------------------------------------------------------------------
output_style = :nested

# デバックモードで出力する場合は以下を有効にして下さい。(ブラウザで検証する際にSCSSファイルの該当行が表示されるようになります)
sourcemap = true

# Com­passで拡張された関数で使うURLを、絶対パスか相対パスかを指定することができます。(true: 相対パス / false: 絶対パス)
# ※sprite機能を使いたい場合は、ここをtrueにする必要があります
relative_assets = false

# css上にここが /*どのscssファイルの何行目に記述されたものか*/  のコメント付きでの出力の有無(true: 出力する / false: 出力しない)
line_comments = false

# Sassの記述形式を指定します。(SCSSとSASSの2種類の記述法を選択できます。)
preferred_syntax = :scss