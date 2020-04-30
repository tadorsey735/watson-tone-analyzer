# singlecommand-legacy-protectorate

<img src="./assets/legacy-protectorate.png" width="100%">

> *They say hope begins in the dark. That faith is the bird that feels light when the sky is still dim. But with every tomorrow we carry our past. It echoes beneath our feet. There are no clean slates.*

## Some Background

The United Nations Interstellar Protectorate, also referred to simply as the Protectorate or the United Nations, has built and now rules a sovereign interstellar colonial empire with a radius of nearly 50 light years that spans out in all directions from its home system, Sol.

During early expansion of this empire, an alien technology was discovered on the planet now known as Harlan's World. Through innovation, humans harnessed the technology to digitize their consciousness into *stacks*. Once digitized, a person's consciousness can be transferred between bodies, backed up to remote storage, even needlecast across huge swathes of interstallar space.

There are legal boundaries of course. Being found guilty of someone else's sleeve death is still a grave crime, even if you leave their stack intact. Double-sleeving is also considered a very serious crime that could have you put on ice for a long time.

Double sleeving isn't exactly a crime your average Joseph could commit. The materials and engineering needed for these innovations still remain prohibitively expensive in today's day and age; in practice it's really only the rich (popularly referred to as "Meths") who can realize much of the potential stack technology affords humanity.

While a Meth might have the resources to regularly update their sleeve as if it were just another wardrobe item and would probably be needle-casting a daily backup of their stack to remote satellites while brushing their teeth before sleep, an ordinary citizen would be hard-pressed to afford just one new sleeve in a standard lifetime. In the case of a debilitating physical accident, even with the best insurance, they'd be lucky to be re-sleeved into anything that wasn't a downgrade from their pre-accident form.

You've probably heard your whole life how we're working for a better, egalitarian future. A multi-tenant architecture, more accessible and but so also more secure for everyone, built on microservices that somehow don't create a support nightmare for the generations they're left to. And yet ... here you are centuries into a future where humans have spread out into the stars not only as explorers but as _conquerers_, a future where humans are able to shed the once fatal shackles of corporeal existence and are now literally untethered to explore the expanse of both space and time and yet ... and yet nothing has changed. Our legacy ... a legacy of tyranny, class warfare, corruption, greed, sexual perversions and nihilistic sadism and prohibitively expensive anti-patterns that don't scale ... our legacy follows us like a loyal dog at heel as we stride through history.

And but yet, being the penny-a-pop philospher you are, you're tempted to think this is just how we are, we need the oppression and the excuses it provides us, that maybe really we're the dog at heel to what is essentially our collective nature because what other conclusion could possibly be drawn? And you'll find this cynical logic pervades all strata and tiers of today's human civilization, perhaps most significantly within the ranks of the Meths as their age reaches toward the aeons until it seems their mortality is approaching the infinite like the limit of `f(x) = 1/x` moving infinitely toward abyss as x zeroes in on ∞ and the unreal.

<img src="./assets/ouroboros.jpg" width="100%">


## The World's Different After 300 Years on Ice and Python 2 is Officially EOL

So now that you're caught up a little bit, let's jump in. First you'll need Python 3.7 and virtualenv installed on your machine. You can check if they are by using these commands:

```bash
which python3.7
which virtualenv
```

If you don't get output, find installation instructions online that are compatible with your operating system.

<img src="./assets/welcome-home.jpg" width="100%">

With dependencies in check, run the following to get started:

```bash
git clone git@github.com:singlecomm/singlecommand-legacy-protectorate
cd singlecommand-legacy-protectorate
bash ./bin/setup.sh
python main.py
```

> Now that you're off ice, it's advised to avoid mirrors and reflective surfaces in general. Even a glimpse of your new sleeve's face before you've had time to psychologically prepare could result in a psychotic break. This is particularly true if you're being re-sleeved for the first time since suffering a violent death.

## Life in the Clouds

Humanity has massively over-populated the Earth. Turns out longer lifespans are a huge turn on and the species is breeding at a bacterial rate now, creating complex familial structures with sometimes seven or eight parents at one layer spawning a massive, interconnected layers beneath them and it's not uncommon for someone to have only met a fraction of their siblings and these days your likely to have a few uncles and aunts born after you were.

And so for those rich enough to afford some peace and quiet away from the masses, there's only one direction to go: up. Today the privileged live in the clouds and try to avoid ground level interactions as much as possible. That's where you come in.

<img src="./assets/aerium.png" width="100%">

If you're reading this documentation, chances are you're a menial infrastructure worker and probably have never met a Meth and never will. However, if you're properly credentialed, this tooling will at least expose some of the cloud functions to you. You can access resource specific functions by importing related modules from the `./cloud/` library.

If you hail from a distant enough era, *library* may conjure an image of row upon rows of papers bound into books, a quiet atmosphere, an elderly clerk who greets you as you enter by peering over the top of their reading glasses, not saying a word, returning their attention to their book as you pass by. But no, that's not what's happening here, that's an antiquated model.

Today libraries don't waste your time by forcing you manually through the pages of a book. Instead, they offer you high-level control of complex tasks so you don't need to worry about the details. For example, here is how we might leverage the ec2 library to gather a list of all the ec2 instances in the production cloud account:

```python
import cloud.ec2 as cloud_ec2

instances = cloud_ec2.get_all_instances(account="production")
```
