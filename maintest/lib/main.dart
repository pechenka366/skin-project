import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        scaffoldBackgroundColor: const Color.fromARGB(255, 32, 32, 32),
        primarySwatch: Colors.yellow,
        dividerColor: Colors.white24,
        listTileTheme: const ListTileThemeData(iconColor: Colors.white),
        appBarTheme: const AppBarTheme(
          backgroundColor: Color.fromARGB(255, 32, 32, 32),
          elevation: 0,
          titleTextStyle: TextStyle(
            color: Colors.white,
            fontSize: 20,
            fontWeight: FontWeight.w700,
          ),
        ),
        textTheme: TextTheme(
          bodyMedium: const TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.w700,
            fontSize: 20,
          ),
          labelSmall: TextStyle(
            color: Colors.white.withOpacity(0.6),
            fontWeight: FontWeight.w700,
            fontSize: 14,
          ),
        ),
      ),
      routes: {
        '/': (context) => CriptoListScreen(title: 'Cripto'),
        '/coin': (context) => CriptoCoinScreen(),
      },
    );
  }
}

class CriptoListScreen extends StatefulWidget {
  const CriptoListScreen({super.key, required this.title});
  final String title;

  @override
  State<CriptoListScreen> createState() => _CriptoListScreenState();
}

class _CriptoListScreenState extends State<CriptoListScreen> {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        leading: Icon(Icons.arrow_back),
      ),
      body: ListView.separated(
        itemCount: 15,
        separatorBuilder: (context, index) => Divider(),
        itemBuilder: (context, i) => ListTile(
          leading: SvgPicture.asset(
            'assets/svg/bitcoin_logo.svg',
            width: 30,
            height: 30,
          ),
          title: Text('Bitcoin', style: theme.textTheme.bodyMedium),
          subtitle: Text('20000\$', style: theme.textTheme.labelSmall),
          trailing: const Icon(Icons.arrow_forward_ios),
          onTap: () {
            Navigator.of(context).pushNamed('/coin');
          },
        ),
      ),
    );
  }
}

class CriptoCoinScreen extends StatelessWidget {
  const CriptoCoinScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Bitcoin'),
        leading: IconButton(
          onPressed: () => Navigator.of(context).pop(),
          icon: const Icon(Icons.arrow_back_ios, color: Colors.white),
        ),
      ),
    );
  }
}
